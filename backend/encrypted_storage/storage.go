package main

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io"
	"os"
)

func encryptFile(inputFile, outputFile string, key []byte) error {
	plaintext, err := os.ReadFile(inputFile)
	if err != nil {
		return err
	}

	block, err := aes.NewCipher(key)
	if err != nil {
		return err
	}

	ciphertext := make([]byte, aes.BlockSize+len(plaintext))
	iv := ciphertext[:aes.BlockSize]
	if _, err := io.ReadFull(rand.Reader, iv); err != nil {
		return err
	}

	stream := cipher.NewCFBEncrypter(block, iv)
	stream.XORKeyStream(ciphertext[aes.BlockSize:], plaintext)

	return os.WriteFile(outputFile, ciphertext, 0644)
}

func decryptFile(inputFile, outputFile string, key []byte) error {
	ciphertext, err := os.ReadFile(inputFile)
	if err != nil {
		return err
	}

	block, err := aes.NewCipher(key)
	if err != nil {
		return err
	}

	if len(ciphertext) < aes.BlockSize {
		return fmt.Errorf("ciphertext too short")
	}

	iv := ciphertext[:aes.BlockSize]
	ciphertext = ciphertext[aes.BlockSize:]

	stream := cipher.NewCFBDecrypter(block, iv)
	stream.XORKeyStream(ciphertext, ciphertext)

	return os.WriteFile(outputFile, ciphertext, 0644)
}

func main() {
	key := []byte("32-byte-long-key-1234567890abcdef") // Replace with a secure key
	inputFile := "example.txt"
	encryptedFile := "example.enc"
	decryptedFile := "example_decrypted.txt"

	// Encrypt file
	if err := encryptFile(inputFile, encryptedFile, key); err != nil {
		fmt.Println("Encryption failed:", err)
		return
	}
	fmt.Println("File encrypted successfully!")

	// Decrypt file
	if err := decryptFile(encryptedFile, decryptedFile, key); err != nil {
		fmt.Println("Decryption failed:", err)
		return
	}
	fmt.Println("File decrypted successfully!")
}