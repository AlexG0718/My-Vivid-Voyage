const generalController = {
    getMap: (req, res, next) => {
        console.log('getMap: ', req);
        return next();
    },
    saveMap: (req, res, next) => {
        console.log('saveMap: ', req);
        return next();
    },
    getData: async (req, res, next) => {
        const query = `SELECT * FROM users_states`;
        // await db.query(query).then((data: unknown) => {
        //   res.locals.getData = data;
        // });
        return next();
    },
    saveData: async (req, res, next) => {
        const { selectedRegion, image, caption } = req.body;
        if (selectedRegion && (image || caption)) {
            console.log('HIT!');
            const values = [
                selectedRegion,
                image,
                caption,
            ];
            const query = `INSERT INTO users (region, image, caption) VALUES ($1, $2, $3)`;
            // try {
            //   db.query(query, values).then(() => {
            //     res.locals.saveData = values;
            //     console.log('Successfully added to database');
            //   });
            // } catch (err) {
            //   if (err)
            //     return next({
            //       log: 'An error occurred attempting to save to database',
            //       status: 500,
            //       message: { err: err },
            //     });
            // }
            return next();
        }
        else {
            return next({
                log: 'An error occurred attempting to save data at generalController.saveData',
                status: 500,
                message: {
                    err: 'An error occurred attempting to save data at generalController.saveData',
                },
            });
        }
    },
};
export default generalController;
