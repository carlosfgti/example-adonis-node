'use strict'

const Drive = use('Drive')
const Helpers = use('Helpers')

class Filesystems {

    async removeFile (path, objectItem) {
        // Remove image product (if exists)
        if (objectItem) {
            const pahtFull = Helpers.publicPath(`uploads/${path}/${objectItem}`)
            const existsFile = await Drive.exists(pahtFull)
            if (existsFile)
                return await Drive.delete(pahtFull)

            return true
        }

        return true
    }

}

module.exports = Filesystems
