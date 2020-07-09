new Vue ({
    el:'#app',
    data: {
        first:1
        
        
    },
    methods: {
        next : function(){
            this.first++;
        },
        sign : function(){
            this.first+=4;
        }
    }
})