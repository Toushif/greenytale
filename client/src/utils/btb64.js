const arrayBufferToBase64 = ( buffer ) => {
    if(!buffer) {
        return buffer
    }
    let binary = '';
    const bytes = new Uint8Array( buffer );
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    const stream = window.btoa( binary )
    const img = 'data:image/png;base64,' + stream
    return img
}

export default arrayBufferToBase64;