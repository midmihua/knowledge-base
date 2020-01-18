class Notification {

    enterValidField(field) {
        return `Please enter a valid ${field}`;
    }

    entityCreated(entity) {
        return `${entity} created successfully`;
    }

    entityNotFound(entity) {
        return `${entity} can not be found`;
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

    incorrectEntityProvided(entity) {
        return `Incorrect ${entity} provided`;
    }

    incorrectHeaderValue(header) {
        return `${header} value is incorrect`;
    }

    generalIncorrectData() {
        return `Validation failed due to incorrect data`;
    }

    generalNotAuthenticated() {
        return `You are not authenticated`;
    }
}

module.exports.notify = new Notification();