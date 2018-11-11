// Uma factory retorna sempre um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}