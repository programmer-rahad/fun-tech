function RoadMap() {
    const questionItems = document.querySelectorAll('.roadmap-bar .question');
    const roadMapItems = document.querySelectorAll('.roadmap-item');
    const mobileQuestion = document.querySelectorAll('.roadmap-item .question');
    let index;
    if (roadMapItems.length) {
        roadMapItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                roadMapItems.forEach(function (item, i) {
                    if (this === item) {
                        index = i;
                    }
                    mobileQuestion[i].classList.remove('active');
                    questionItems[i].classList.remove('active');
                    roadMapItems[i].querySelector('h3').classList.remove('active');
                }.bind(this));
                
                mobileQuestion[index].classList.add('active');
                questionItems[index].classList.add('active');
                roadMapItems[index].querySelector('h3').classList.add('active');
            });
            item.addEventListener('mouseleave', function () {
                roadMapItems.forEach(function (item, i) {
                    if (this === item) {
                        index = i;
                    }
                    mobileQuestion[i].classList.remove('active');
                    questionItems[i].classList.remove('active');
                    roadMapItems[i].querySelector('h3').classList.remove('active');
                }.bind(this));
            })

        })
    }
}
document.addEventListener('DOMContentLoaded', function () {
    RoadMap();
})