window.onload = function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
        var ira = document.getElementById('ira');
        if (ira.style.display === 'none') {
            ira.style.display = 'block';
        } else {
            ira.style.display = 'none';
        }
    });
};