module.exports = function registerHook({ action }) {
	action('feature.items.create', (input, { database }) => {

		database.raw('exec [dbo].[test]').then(() => {
			console.log("stored procedure executed");
		})
			.catch((e) => {
				console.log("error executing stored procedure. see error log for details.");
				console.error(e);
			});

	});
};