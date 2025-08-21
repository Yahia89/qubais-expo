#!/usr/bin/env bash
set -euo pipefail

# Run this script from the directory where the PDFs live.
# It will rename each file to a simplified, no-spaces version.

echo "Renaming files..."

# Rename files one by one to avoid associative array issues with special characters
if [[ -f "Quba Islamic School – Suggested 4-Year Academic Plan - Quba Islamic School – Suggested 4-Year Academic Plan.pdf" ]]; then
  mv "Quba Islamic School – Suggested 4-Year Academic Plan - Quba Islamic School – Suggested 4-Year Academic Plan.pdf" "Suggested-4-Year-Academic-Plan.pdf"
  echo "Renamed: Suggested 4-Year Academic Plan"
fi

if [[ -f "Quba Islamic School – HiSET Pathway (10th Grade Option) - Quba Islamic School – HiSET Pathway (10th Grade Option).pdf" ]]; then
  mv "Quba Islamic School – HiSET Pathway (10th Grade Option) - Quba Islamic School – HiSET Pathway (10th Grade Option).pdf" "HiSET-Pathway-10th-Grade-Option.pdf"
  echo "Renamed: HiSET Pathway"
fi

if [[ -f "Quba Islamic School - Graduation Requirements - Quba Islamic School - Graduation Requirements.pdf" ]]; then
  mv "Quba Islamic School - Graduation Requirements - Quba Islamic School - Graduation Requirements.pdf" "Graduation-Requirements.pdf"
  echo "Renamed: Graduation Requirements"
fi

if [[ -f "QIS High School – Transfer Credit Worksheet - QIS High School – Transfer Credit Worksheet.pdf" ]]; then
  mv "QIS High School – Transfer Credit Worksheet - QIS High School – Transfer Credit Worksheet.pdf" "Transfer-Credit-Worksheet.pdf"
  echo "Renamed: Transfer Credit Worksheet"
fi

if [[ -f "High School Course Graduation Requirements .pdf" ]]; then
  mv "High School Course Graduation Requirements .pdf" "High-School-Course-Graduation-Requirements.pdf"
  echo "Renamed: High School Course Graduation Requirements"
fi

if [[ -f "High School Academic Counseling Questionnaire - High School Academic Counseling Questionnaire.pdf" ]]; then
  mv "High School Academic Counseling Questionnaire - High School Academic Counseling Questionnaire.pdf" "Academic-Counseling-Questionnaire.pdf"
  echo "Renamed: Academic Counseling Questionnaire"
fi

if [[ -f "COMMUNITY SERVICE Form (Front & Back).pdf" ]]; then
  mv "COMMUNITY SERVICE Form (Front & Back).pdf" "Community-Service-Form.pdf"
  echo "Renamed: Community Service Form"
fi

if [[ -f "9TH GRADE COURSE SELECTION FORM - 9TH GRADE COURSE SELECTION FORM.pdf" ]]; then
  mv "9TH GRADE COURSE SELECTION FORM - 9TH GRADE COURSE SELECTION FORM.pdf" "9th-Grade-Course-Selection-Form.pdf"
  echo "Renamed: 9th Grade Course Selection Form"
fi

if [[ -f "11TH GRADE COURSE SELECTION FORM - 11TH GRADE COURSE SELECTION FORM.pdf" ]]; then
  mv "11TH GRADE COURSE SELECTION FORM - 11TH GRADE COURSE SELECTION FORM.pdf" "11th-Grade-Course-Selection-Form.pdf"
  echo "Renamed: 11th Grade Course Selection Form"
fi

if [[ -f "10TH GRADE COURSE SELECTION FORM - 10TH GRADE COURSE SELECTION FORM.pdf" ]]; then
  mv "10TH GRADE COURSE SELECTION FORM - 10TH GRADE COURSE SELECTION FORM.pdf" "10th-Grade-Course-Selection-Form.pdf"
  echo "Renamed: 10th Grade Course Selection Form"
fi

echo "Renaming complete!"
echo "Files should now have clean, web-friendly names."
