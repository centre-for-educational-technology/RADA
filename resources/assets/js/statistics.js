import Vue from 'vue';
window.Vue = Vue;
require('vue-resource');
const VueChartJs = require('vue-chartjs');

Vue.component('line-chart', {
    extends: VueChartJs.Line,
    props: ['type'],
    mounted () {
        this.$http.get(window.Laravel.apiUrl + '/manage/google-analytics-rows?type=' + this.type).then(response => {

            let name = response.body.name;
            let rows = response.body.rows;
            let rowsLength = rows.length;
            let labels = [];
            let data = [];

            for (let i=0; i<rowsLength; i++) {
                let row = rows[i];
                let label = row[0];
                let nr = row[1];
                if (this.type === 'max') {
                    let year = label.substring(0, 4);
                    let month = label.substring(4, 6);
                    label = year + '-' + month;
                }
                labels.push(label);
                data.push(nr);
            }


            this.renderChart({
                labels: labels,
                datasets: [
                    {
                        label: name,
                        backgroundColor: '#ffffff',
                        data: data
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false, legend: { display: false }})

            setTimeout(() => {
                $('#google-analytics-line-graph .line-chart').addClass('hidden');
                $('.line-chart-last-week').removeClass('hidden');
            }, 500);

        });
    }
});

Vue.component('pie-chart', {
    extends: VueChartJs.Pie,
    props: ['data', 'labels'],
    mounted () {

        this.renderChart({
            labels: JSON.parse(this.labels),
            datasets: [
                {
                    backgroundColor: [
                        "#3e95cd",
                        "#8e5ea2",
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850",
                        "#3e9",
                        "#8e5",
                        "#3cb"],
                    data: JSON.parse(this.data)
                }
            ]
        }, {
            responsive: true,
            maintainAspectRatio: false
        });

    }
});

const monitoringGameApp = new Vue({
    el: '#monitoring-vue-container',
    created: function () {

    },
    data() {
        return {}
    },
    methods: {
        onTypeChange(e) {
            $('#google-analytics-line-graph .line-chart').addClass('hidden');
            let type = e.target.value;
            switch(type) {
                case 'last-month':
                    $('.line-chart-last-month').removeClass('hidden');
                    break;
                case 'max':
                    $('.line-chart-max').removeClass('hidden');
                    break;
                default:
                    $('.line-chart-last-week').removeClass('hidden');
            }
        }
    }
});
