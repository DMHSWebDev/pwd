#!/bin/bash

# Arrays of folder names for each period
period2=("student1" "student2" "student3" "student4" "student5" "student6" "student7" "student8" "student9" "student10" "student11" "student12" "student13" "student14" "student15")
period4=("student1" "student2" "student3" "student4" "student5" "student6" "student7" "student8" "student9" "student10" "student11" "student12" "student13" "student14" "student15" "student16" "student17" "student18" "student19" "student20")

# Create directories for period 2
for student in "${period2[@]}"; do
  mkdir -p "period2/$student"
done

# Create directories for period 4
for student in "${period4[@]}"; do
  mkdir -p "period4/$student"
done

# Add the new directories to git
git add .

# Commit the changes
git commit -m "Add directories for period 2 and period 4 students"

# Push the changes to the repository
git push origin main