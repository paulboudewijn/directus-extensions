module.exports = function ( { action } ) {

	action('uren.items.create', (input, { database }) => {
			database.raw('exec [dbo].[UrenAfterInsertHook] @id=?', [input.key]).then(() => {
			console.log("uren.items.create hook: stored procedure executed")
		})
		.catch((e) => {
			console.log("uren.items.create hook: error executing stored procedure. see error log for details.")
			console.error(e);
		});
	});

};