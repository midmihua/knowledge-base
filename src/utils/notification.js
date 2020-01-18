class Notification {

    enterValidField(field) {
        return `Please enter a valid ${field}`;
    }

    fieldExists(field) {
        return `${field} already exists`;
    }

    fieldSymbolsEqualOrMore(field, count) {
        return `${field} should be ${count} symbols or more`;
    }

    collectionNotFetched(collection) {
        return `${collection} collection not fetched`;
    }

    collectionFetched(collection) {
        return `${collection} collection fetched successfully`;
    }
}

module.exports.notify = new Notification();