async function upsert(knex, tableName = '', uniqueKey = '', itemData = []) {
  const firstObjectIfArray = Array.isArray(itemData) ? itemData[0] : itemData
  const exclusions = Object.keys(firstObjectIfArray)
    .filter(c => c !== 'id' && !uniqueKey.includes(c))
    .map(c => knex.raw('?? = EXCLUDED.??', [c, c]).toString())
    .join(', ')

  const insertString = knex(tableName)
    .insert(itemData)
    .toString()

  let conflictString = ''
  if (exclusions) {
    conflictString = knex.raw(` ON CONFLICT (??) DO UPDATE SET ${exclusions} RETURNING *;`, uniqueKey).toString()
  } else {
    conflictString = ' ON CONFLICT DO NOTHING RETURNING *;'
  }

  const query = (insertString + conflictString).replace(/\?/g, '\\?')
  return knex.raw(query)
}

module.exports.upsert = upsert
