CREATE TABLE sellers (
    seller_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bussiness_name VARCHAR(100) NOT NULL,
    business_address TEXT,
    business_email VARCHAR(100) NOT NULL UNIQUE,
    business_phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);