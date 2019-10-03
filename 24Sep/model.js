const salaryOperations = {
    basicSalary : 0,
    setbasicSalary(bs){
        this.basicSalary = bs;
    },
    hra(){
        return this.basicSalary * 0.3;
    },
    da(){
        return this.basicSalary * 0.9;
    },
    ta(){
        return this.basicSalary * 0.2;
    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ta();
    },
    tax(){
        return this.basicSalary  * 0.1;
    },
    ns(){
        return this.gs() - this.tax();
    }
}