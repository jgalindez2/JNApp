const title = {
    pattern: /^[a-zA-Z\s\-]+$/,
    message: 'Name must be only letters, spaces, or dashes',
    required: true,
    description: 'Enter the title'
}

const addSchema = {
	properties: {
		title,
		body: {
    		required: true,
        	description: 'Enter the body'
    	}
	}
}

const readListSchema = {
	properties: { title }
}

module.exports = {
	addSchema,
	readListSchema
}
