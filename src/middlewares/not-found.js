export default (req, res, next) => {
    res.status(404).json({'error': 'Not found'});
}
