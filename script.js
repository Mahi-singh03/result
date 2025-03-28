    document.addEventListener('DOMContentLoaded', function() {
    const rollNoInput = document.getElementById('rollNoInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultContainer = document.getElementById('resultContainer');
    const notFound = document.getElementById('notFound');
    
    // Function to display student result
    function displayResult(student) {
        // Update student info
        document.getElementById('studentName').textContent = student["Student's Name"];
        document.getElementById('fatherName').textContent = `Father: ${student["Father's Name"]}`;
        document.getElementById('rollNo').textContent = `Roll No: ${student["No."]}`;
        document.getElementById('Admission no.').textContent = `Admission no.: ${student["Admission no."]}`;
        
        // Update subject results
        const tableBody = document.getElementById('resultTableBody');
        tableBody.innerHTML = '';
        
        for (const [subject, marks] of Object.entries(student.Subjects)) {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${subject}</td>
                <td>${marks.TH || '-'}</td>
                <td>${marks.CCE || '-'}</td>
                <td>${marks.P || '-'}</td>
                <td><strong>${marks.TOTAL}</strong></td>
            `;
            
            tableBody.appendChild(row);
        }
        
        // Update summary
        document.getElementById('totalMarks').textContent = student.TOTAL;
        document.getElementById('percentage').textContent = `${student["%"]}%`;
        document.getElementById('division').textContent = student.DIVISION;
        
        // Show result and hide not found
        resultContainer.style.display = 'block';
        notFound.style.display = 'none';
    }
    
    // Search button click handler
    searchBtn.addEventListener('click', function() {
        const rollNo = parseInt(rollNoInput.value);
        
        if (isNaN(rollNo)) {
            alert('Please enter a valid roll number');
            return;
        }
        
        const student = data.students.find(s => s["No."] === rollNo);
        
        if (student) {
            displayResult(student);
        } else {
            resultContainer.style.display = 'none';
            notFound.style.display = 'block';
        }
    });
    
    // Allow search on Enter key press
    rollNoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});
