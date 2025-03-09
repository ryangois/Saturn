
### **Step-by-Step Setup Guide**

#### **1. Prerequisites**
Before running the toolkit, ensure you have the following installed:

- **Python 3.x** (for Python-based tools)
- **Go** (for Go-based tools)
- **Rust** (for Rust-based tools)
- **Node.js** (for the frontend and backend)
- **PostgreSQL** (for the database)
- **Docker** (optional, for containerized deployment)

---

#### **2. Clone the Repository**
Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/unified-cybersecurity-toolkit.git
cd unified-cybersecurity-toolkit
```

---

#### **3. Install Dependencies**

##### **Python Dependencies**
Install the required Python libraries:

```bash
pip install -r requirements.txt
```

##### **Go Dependencies**
Install Go dependencies:

```bash
go mod tidy
```

##### **Rust Dependencies**
Install Rust dependencies:

```bash
cargo build
```

##### **Node.js Dependencies**
Install Node.js dependencies for the frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```

---

#### **4. Set Up Environment Variables**
Create a `.env` file in the root directory and add the following API keys:

```bash
# .env
VIRUSTOTAL_API_KEY=your_virustotal_api_key_here
NVD_API_KEY=your_nvd_api_key_here
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_DB=cybersecurity
```

- **VirusTotal API Key**: Sign up at [VirusTotal](https://www.virustotal.com/) and get an API key.
- **NVD API Key**: Sign up at [NVD](https://nvd.nist.gov/developers/request-an-api-key) and get an API key.

---

#### **5. Set Up the Database**
1. Start PostgreSQL:
   ```bash
   docker run -d --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=cybersecurity -p 5432:5432 postgres:13
   ```

2. Initialize the database:
   ```bash
   psql -h localhost -U admin -d cybersecurity -f database/init.sql
   ```

---

#### **6. Run the Toolkit**

##### **Option 1: Run with Docker (Recommended)**
1. Build and run the Docker containers:
   ```bash
   docker-compose up --build
   ```

2. Access the frontend at `http://localhost:3000`.

##### **Option 2: Run Manually**
1. Start the backend:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Run individual tools:
   - **Network Analyzer**:
     ```bash
     python backend/network_analyzer/analyzer.py
     ```
   - **Password Vault**:
     ```bash
     go run backend/password_vault/vault.go
     ```
   - **File Integrity Monitor**:
     ```bash
     cargo run --manifest-path=backend/file_integrity/Cargo.toml
     ```

---

### **README.md**

Here’s a comprehensive **README.md** file for your project:

```markdown
# Unified Cybersecurity Toolkit

A comprehensive toolkit for cybersecurity tasks, including network analysis, password management, vulnerability scanning, and more.

---

## Features

1. **Network Analyzer**: Monitor network traffic for suspicious activity.
2. **Password Vault**: Securely store and manage passwords.
3. **File Integrity Monitor**: Detect unauthorized file changes.
4. **File Converter**: Convert files between formats (e.g., CSV ↔ Excel).
5. **Log Analyzer**: Analyze system logs for suspicious activity.
6. **Threat Intelligence Feed**: Fetch real-time threat data.
7. **Encrypted File Storage**: Securely store files with AES-256 encryption.
8. **Vulnerability Scanner**: Scan for open ports and known vulnerabilities.

---

## Prerequisites

- Python 3.x
- Go
- Rust
- Node.js
- PostgreSQL
- Docker (optional)

---

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/unified-cybersecurity-toolkit.git
   cd unified-cybersecurity-toolkit
   ```

2. Install dependencies:
   - Python:
     ```bash
     pip install -r requirements.txt
     ```
   - Go:
     ```bash
     go mod tidy
     ```
   - Rust:
     ```bash
     cargo build
     ```
   - Node.js:
     ```bash
     cd frontend
     npm install
     cd ../backend
     npm install
     ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```bash
   VIRUSTOTAL_API_KEY=your_virustotal_api_key_here
   NVD_API_KEY=your_nvd_api_key_here
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=password
   POSTGRES_DB=cybersecurity
   ```

4. Set up the database:
   ```bash
   docker run -d --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=cybersecurity -p 5432:5432 postgres:13
   psql -h localhost -U admin -d cybersecurity -f database/init.sql
   ```

---

## Running the Toolkit

### Option 1: Docker (Recommended)
1. Build and run the Docker containers:
   ```bash
   docker-compose up --build
   ```

2. Access the frontend at `http://localhost:3000`.

### Option 2: Manual
1. Start the backend:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Run individual tools:
   - **Network Analyzer**:
     ```bash
     python backend/network_analyzer/analyzer.py
     ```
   - **Password Vault**:
     ```bash
     go run backend/password_vault/vault.go
     ```
   - **File Integrity Monitor**:
     ```bash
     cargo run --manifest-path=backend/file_integrity/Cargo.toml
     ```

---

## API Keys

- **VirusTotal**: Sign up at [VirusTotal](https://www.virustotal.com/).
- **NVD**: Sign up at [NVD](https://nvd.nist.gov/developers/request-an-api-key).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
```

---

### **How to Use the Toolkit**

1. **Access the Frontend:**
   - Open your browser and go to `http://localhost:3000`.
   - Use the dashboard to monitor real-time data, run tools, and view reports.

2. **Run Tools via CLI:**
   - Use the CLI menu to run individual tools:
     ```bash
     python backend/cli_menu.py
     ```

3. **View Results:**
   - Check the console or the frontend for tool outputs and reports.

---
