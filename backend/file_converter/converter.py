import pandas as pd

def convert_csv_to_excel(csv_file, excel_file):
    df = pd.read_csv(csv_file)
    df.to_excel(excel_file, index=False)
    print(f"Converted {csv_file} to {excel_file}")

if __name__ == "__main__":
    convert_csv_to_excel("input.csv", "output.xlsx")