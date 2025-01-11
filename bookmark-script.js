document.addEventListener('DOMContentLoaded', function() {
    const bookmarkForm = document.getElementById('bookmark-form');
    const bookmarkTitleInput = document.getElementById('bookmark-title');
    const bookmarkUrlInput = document.getElementById('bookmark-url');
    const bookmarkList = document.getElementById('bookmark-list');

    // Load bookmarks from localStorage
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    savedBookmarks.forEach(bookmark => addBookmarkToDOM(bookmark));

    bookmarkForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookmark = {
            title: bookmarkTitleInput.value.trim(),
            url: bookmarkUrlInput.value.trim()
        };
        addBookmarkToDOM(bookmark);
        saveBookmark(bookmark);
        bookmarkTitleInput.value = '';
        bookmarkUrlInput.value = '';
    });

    function addBookmarkToDOM(bookmark) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = bookmark.url;
        a.textContent = bookmark.title;
        a.target = '_blank';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', function() {
            li.remove();
            deleteBookmark(bookmark.url);
        });

        li.appendChild(a);
        li.appendChild(deleteButton);
        bookmarkList.appendChild(li);
    }

    function saveBookmark(bookmark) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    function deleteBookmark(url) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const updatedBookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }
});
