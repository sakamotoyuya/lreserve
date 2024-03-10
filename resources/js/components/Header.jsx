// Header.jsx
import React from 'react';

function Header({ title }) {
    return (
        <header>
            <h1>{title || 'デフォルトタイトル'}</h1>
            {/* その他のヘッダーコンテンツ */}
        </header>
    );
}


export default Header;
