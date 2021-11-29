module.exports = function registerHook({ action }) {
	action('location_label.items.create', (input, { database }) => {
			database.raw('exec [dbo].[update_location_current_label]').then(() => {
			//console.log("stored procedure executed");
		})
		.catch((e) => {
			//console.log("error executing stored procedure. see error log for details.");
			console.error(e);
		});
	});
};