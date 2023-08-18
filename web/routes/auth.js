module.exports = {
    CheckAuth: async function(req, res, next) {
<<<<<<< HEAD
       console.log(req) ;
=======
        console.log('auth');
>>>>>>> 7f3374142d27b160dd1256d1b579ff4cb8238503
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}