module.exports = function registerHook({ action }) {
	action('location.items.create', (input, { database }) => {
			database.raw('exec [dbo].[insert_missing_location_features]').then(() => {
			//console.log("stored procedure executed");
		})
		.catch((e) => {
			//console.log("error executing stored procedure. see error log for details.");
			console.error(e);
		});
	});
};