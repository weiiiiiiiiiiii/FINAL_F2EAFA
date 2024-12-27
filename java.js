$(document).ready(function () {

    $(".role-img").click(function () {
        // 獲取當前圖片的 src 和 data-alt
        const currentSrc = $(this).attr("src");
        const altSrc = $(this).data("alt");

        // 將圖片的 src 和 data-alt 互換
        $(this).attr("src", altSrc);
        $(this).data("alt", currentSrc);
    });

    $('#class-a').on('click', function () {
        $('.aclass').slideToggle();
    }
    );
    $('#class-b').on('click', function () {
        $('.bclass').slideToggle();
    }
    );
    $('#class-t').on('click', function () {
        $('.tclass').slideToggle();
    }
    );
    $('#class-v').on('click', function () {
        $('.vclass').slideToggle();
    }
    );
    $('#class-h').on('click', function () {
        $('.hclass').slideToggle();
    }
    );
    $('#class-p').on('click', function () {
        $('.pclass').slideToggle();
    }
    );
    $('#class-c').on('click', function () {
        $('.cclass').slideToggle();
    }
    );
    $('#class-d').on('click', function () {
        $('.dclass').slideToggle();
    }
    );
    $('#class-heir').on('click', function () {
        $('.heirs').slideToggle();
    }
    );


    $('#btn1').click(function() {
        $('#woman-vc').hide();
        $('#man-vc').show();
    });

    $('#btn2').click(function() {
        $('#man-vc').hide();
        $('#woman-vc').show();
    });

});