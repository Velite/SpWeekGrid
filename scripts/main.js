(function(){
    moment.locale("ru");
    new Vue({
        el: "#app",
        data: {
            currentDate: null,
            currentStartWeek: null,
            currentEndWeek: null,
            visible: false
        },
        methods: {
            getToday: function(){
                var self = this;
                self.currentDate = moment().format("Сегодня: ww неделя, dddd, DD MMMM YYYY, HH:mm:ss");
                setInterval(self.getToday, 1000);
            }
        },
        created: function(){
            this.getToday();
            this.currentStartWeek = moment().subtract(moment().day() - 1, "d");
            this.currentEndWeek = moment().add(7 - moment().day(), "d");
        }
    });
})();