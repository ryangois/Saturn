use std::fs;
use sha2::{Sha256, Digest};

fn calculate_file_hash(path: &str) -> String {
    let mut file = fs::File::open(path).unwrap();
    let mut hasher = Sha256::new();
    std::io::copy(&mut file, &mut hasher).unwrap();
    let hash = hasher.finalize();
    format!("{:x}", hash)
}

fn main() {
    println!("File Integrity Monitor running...");
}