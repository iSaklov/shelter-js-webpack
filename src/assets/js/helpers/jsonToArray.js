	export default function jsonToArray(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key) {
      result.push(json[key]);
    });
    return result;
	}
