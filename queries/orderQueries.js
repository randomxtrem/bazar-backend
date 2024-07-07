const recentorders = 'select * from orders order by date asc limit 10';

module.exports = {
    recentorders,
}