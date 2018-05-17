
function setRating(skill_id, rate, readable) {
	$("#rateYo-"+skill_id).rateYo({ halfStar: true, rating: rate, readOnly: readable})
	.on("rateyo.set", function (e, data) {
  	$("#rate-"+skill_id).val(data.rating);
	});
}
