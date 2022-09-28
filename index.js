/** @param {number[]} grades */
 function getNumberOfGrades(grades) {
    return grades.length;
}

/** @param {number[]} grades */
 function getSumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade
    });
    return sum;
}

/** @param {number[]} grades */
 function getAverageValue(grades) {
    return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
function TP(grades) {
    let tp=0;
    grades.forEach(function(grade) {
        if(grade>=60){
            return tp+=1;
          }
});
    return tp;
}

/** @param {number[]} grades */
 function A(grades) {
    let a=0;
    grades.forEach(function(grade) {
        if(grade>=90){
            return a+=1;
          }
});
    return a;
}

/** @param {number[]} grades */
 function BP(grades) {
    let b_p=0;
    grades.forEach(function(grade) {
        if(grade>=87 && grade<=89){
            return b_p+=1;
         }
    });
    return b_p;
}

/** @param {number[]} grades */
function B(grades) {
    let b=0;
    grades.forEach(function(grade) {
        if(grade>=84 && grade<=86){
            return b+=1;
         }
    });
    return b;
}

/** @param {number[]} grades */
function BM(grades) {
    let b_m=0;
    grades.forEach(function(grade) {
        if(grade>=80 && grade<=83){
            return b_m+=1;
         }
    });
    return b_m;
}

/** @param {number[]} grades */
function CP(grades) {
    let c_p=0;
    grades.forEach(function(grade) {
        if(grade>=77 && grade<=79){
            return c_p+=1;
         }
    });
    return c_p;
}

/** @param {number[]} grades */
function C(grades) {
    let c=0;
    grades.forEach(function(grade) {
        if(grade>=74 && grade<=76){
            return c+=1;
         }
    });
    return c;
}

/** @param {number[]} grades */
function CM(grades) {
    let c_m=0;
    grades.forEach(function(grade) {
        if(grade>=70 && grade<=73){
            return c_m+=1;
         }
    });
    return c_m;
}

/** @param {number[]} grades */
function DP(grades) {
    let d_p=0;
    grades.forEach(function(grade) {
        if(grade>=65 && grade<=69){
            return d_p+=1;
         }
    });
    return d_p;
}

/** @param {number[]} grades */
function D(grades) {
    let d=0;
    grades.forEach(function(grade) {
        if(grade>=60 && grade<=64){
            return d+=1;
         }
    });
    return d;
}

/** @param {number[]} grades */
function F(grades) {
    let f=0;
    grades.forEach(function(grade) {
        if(grade>=0 && grade<=59){
            return f+=1;
         }
    });
    return f;
}

/** @param {number[]} grades */
function A95(grades) {
    let a95=0;
    grades.forEach(function(grade) {
        if(grade>=95){
            return a95+=1;
         }
    });
    return a95;
}


/** @param {number[]} grades */
function IV(grades) {
    grades.forEach(function(grade) {
    return grade;
    });
}

/** @param {number[]} grades */
 function IV(grades) {
    return grades.map(function(grade) {
        if (grade >= 0) {
            return grade;
        }
    });
 }




const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [];

const renderStats2Table = grades => {
    const tbody = document.querySelector("#stats-table2 tbody");
    tbody.innerHTML = `<tr>
        <td>${A(grades)}</td>
        <td>${BP(grades)}</td>
        <td>${B(grades)}</td>
        <td>${BM(grades)}</td>
    </tr>`;
}
const renderStats3Table = grades => {
    const tbody = document.querySelector("#stats-table3 tbody");
    tbody.innerHTML = `<tr>
        <td>${CP(grades)}</td>
        <td>${C(grades)}</td>
        <td>${CM(grades)}</td>
        <td>${DP(grades)}</td>
    </tr>`;
}
const renderStats4Table = grades => {
    const tbody = document.querySelector("#stats-table4 tbody");
    tbody.innerHTML = `<tr>
         <td>${D(grades)}</td>
         <td>${F(grades)}</td>
         <td>${A95(grades)}</td>
        <td>${TP(grades)}</td>
    </tr>`;
}
const renderStats5Table = grades => {
    const tbody = document.querySelector("#stats-table5 tbody");
    tbody.innerHTML = `<tr>
        <td>${IV(grades)}</td>
    </tr>`;
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
    renderStats3Table(grades);
    renderStats4Table(grades);
    renderStats5Table(grades);
 
}



gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

render(grades);

