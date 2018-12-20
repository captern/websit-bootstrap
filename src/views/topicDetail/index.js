import '../../assets/Common';
import './index.scss';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

$(function () {
    // let data = '';
    ClassicEditor.create(document.querySelector('#editor'), {
        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
    }, {
        language: 'zh-CN'
    }, {
        ckfinder: {
            uploadUrl: '/'
        }
    }).then(editor => {
        window.editor = editor;
        // data = editor.getData();
        // console.log(data);
    }).catch(err => {
        console.error(err.stack);
    });

    $('#reply-button').click(function () {
        let result = window.editor.getData();
        console.log(result);
        alert(result);
    });
});

