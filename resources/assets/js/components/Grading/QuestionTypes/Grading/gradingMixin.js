export default {
    methods: {
        getMaxGrade() {
            return this.maxGrade;
        },
        getFinalGrade() {
            return this.inputGrade;
        },
        canSubmit() {
            const finalGrade = this.getFinalGrade();
            const maxGrade = this.getMaxGrade();
            return finalGrade >= 0 && finalGrade <= maxGrade;
        },
        onButtonSubmit(e) {
            e.preventDefault();
            if (this.canSubmit()) {
                this.onSubmit(this.getFinalGrade())
            }
            return false;
        },
        onSubmit(grade) {
            let vm = this;
            let data = {
                grade: grade
            };
            let url = '/api/grading/' + this.answerId + '/update';
            this.inAjaxCall = true;
            this.$http.post(url, data).then(response => {
                vm.inAjaxCall = false;
                vm.$parent.markGraded(this.answerId, grade);
                vm.$parent.showAlert(response.body);
            }, response => {
                vm.inAjaxCall = false;
                vm.$parent.showAlert(response);
            });
        }
    }
}