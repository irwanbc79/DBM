<?php
/**
 * PT. Dira Baraka Mulia - Contact Form Handler
 * Deploy this file to the same directory as index.html on Hostinger
 * 
 * Setup:
 * 1. Update $to_email with your actual company email
 * 2. Update SMTP settings if using Hostinger email
 * 3. Set form action in index.html to "send-mail.php"
 */

// --- Configuration ---
$to_email = "info@dira.co.id";
$subject_prefix = "[Website Inquiry] ";

// --- CORS & Security ---
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- Rate limiting (simple file-based) ---
$rate_file = sys_get_temp_dir() . '/dira_rate_' . md5($_SERVER['REMOTE_ADDR']) . '.txt';
if (file_exists($rate_file)) {
    $last_time = (int) file_get_contents($rate_file);
    if (time() - $last_time < 60) { // 1 submission per minute
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Terlalu banyak permintaan. Silakan tunggu 1 menit.']);
        exit;
    }
}

// --- Sanitize inputs ---
function clean($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

$nama = clean($_POST['nama'] ?? '');
$perusahaan = clean($_POST['perusahaan'] ?? '');
$whatsapp = clean($_POST['whatsapp'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$layanan = clean($_POST['layanan'] ?? '');
$pesan = clean($_POST['pesan'] ?? '');

// --- Validation ---
$errors = [];
if (empty($nama)) $errors[] = 'Nama wajib diisi';
if (empty($whatsapp)) $errors[] = 'Nomor WhatsApp wajib diisi';
if (empty($layanan)) $errors[] = 'Layanan wajib dipilih';
if (empty($pesan)) $errors[] = 'Pesan wajib diisi';
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Format email tidak valid';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// --- Compose Email ---
$layanan_map = [
    'ekspor' => 'Jasa Ekspor',
    'impor' => 'Jasa Impor',
    'undername' => 'Layanan Undername',
    'umum' => 'Perdagangan Umum',
    'dokumen' => 'Kepabeanan & Dokumen',
    'konsultasi' => 'Konsultasi Perdagangan',
];
$layanan_text = $layanan_map[$layanan] ?? $layanan;
$subject = $subject_prefix . $layanan_text . " - " . $nama;

$body = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; color: #333; line-height: 1.6;'>
  <div style='max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;'>
    <div style='background: #0B3D33; color: #fff; padding: 20px 24px;'>
      <h2 style='margin:0; font-size: 18px;'>📩 Inquiry Baru dari Website</h2>
    </div>
    <div style='padding: 24px;'>
      <table style='width: 100%; border-collapse: collapse;'>
        <tr><td style='padding: 8px 0; font-weight: bold; width: 140px;'>Nama:</td><td>{$nama}</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold;'>Perusahaan:</td><td>" . ($perusahaan ?: '-') . "</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold;'>WhatsApp:</td><td><a href='https://wa.me/62" . ltrim($whatsapp, '0') . "'>{$whatsapp}</a></td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold;'>Email:</td><td>" . ($email ?: '-') . "</td></tr>
        <tr><td style='padding: 8px 0; font-weight: bold;'>Layanan:</td><td>{$layanan_text}</td></tr>
      </table>
      <hr style='border: none; border-top: 1px solid #eee; margin: 16px 0;'>
      <p style='font-weight: bold; margin-bottom: 8px;'>Pesan:</p>
      <p style='background: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap;'>{$pesan}</p>
    </div>
    <div style='background: #f5f5f5; padding: 12px 24px; font-size: 12px; color: #999;'>
      Dikirim dari website dira.co.id pada " . date('d/m/Y H:i:s') . " WIB
    </div>
  </div>
</body>
</html>";

// --- Send Email ---
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Website Dira <noreply@dira.co.id>\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: {$nama} <{$email}>\r\n";
}

$sent = mail($to_email, $subject, $body, $headers);

if ($sent) {
    // Update rate limit
    file_put_contents($rate_file, time());
    
    // Log the inquiry
    $log_entry = date('Y-m-d H:i:s') . " | {$nama} | {$whatsapp} | {$layanan_text}\n";
    file_put_contents(__DIR__ . '/inquiry_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode(['success' => true, 'message' => 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Gagal mengirim email. Silakan hubungi kami via WhatsApp.']);
}
