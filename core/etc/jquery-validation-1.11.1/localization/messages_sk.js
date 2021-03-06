/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SK (Slovak; sloven  ina, slovensk   jazyk)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Povinn   zada  .",
		maxlength: $.validator.format("Maxim  lne {0} znakov."),
		minlength: $.validator.format("Minim  lne {0} znakov."),
		rangelength: $.validator.format("Minim  lne {0} a Maxim  lne {0} znakov."),
		email: "E-mailov   adresa mus   by   platn  .",
		url: "URL mus   by   platn  .",
		date: "Mus   by   d  tum.",
		number: "Mus   by       slo.",
		digits: "M    e obsahova   iba     slice.",
		equalTo: "Dva hodnoty sa musia rovna  .",
		range: $.validator.format("Mus   by   medzi {0} a {1}."),
		max: $.validator.format("Nem    e by   viac ako{0}."),
		min: $.validator.format("Nem    e by   menej ako{0}."),
		creditcard: "    slo platobnej karty mus   by   platn  ."
	});
}(jQuery));