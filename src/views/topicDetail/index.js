import '../../assets/Common';
import './index.scss';


$(document).delegate('.btn-move-page', 'click', function () {
    let type = $(this).attr('data-type');
    if (type === 'top') {
        window.scrollTop(0, 1000);
    } else if (type === 'bottom') {
        let scrollDom = $('.media-body');
        scrollDom.scrollTop = scrollDom.scrollHeight;
    }
});
