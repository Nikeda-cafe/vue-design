var app = new Vue({
    el: '#app',
    data: {
        isActive: [true,false,false],
        isActiveTab: 0,
    },

    methods: {
        changeTab(number){
            this.isActiveTab = number;
            this.isActive = this.isActive.map(function(){
                return false;
            })
            this.isActive[this.isActiveTab] = true;
        }

    },
})