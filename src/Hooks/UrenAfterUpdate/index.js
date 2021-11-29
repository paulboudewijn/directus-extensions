module.exports = function ( { action } ) {
	action('uren.items.update', (input, { database }) => {
			//console.log(input);
			database.raw('exec [dbo].[UrenAfterUpdateHook] @id=?', [input.keys[0]]).then(() => {
			console.log("uren.items.update hook: stored procedure executed")
		})
		.catch((e) => {
			console.log("uren.items.update hook: error executing stored procedure. see error log for details.")
			console.error(e);
		});
	});
};