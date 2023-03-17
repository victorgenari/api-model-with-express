module.exports = {
    up: `
      CREATE TABLE IF NOT EXISTS people (
      \`id\` bigint(20) NOT NULL AUTO_INCREMENT,
      \`active\` boolean DEFAULT '1',
      \`name\` varchar(255) DEFAULT NULL,
      \`ocupation\` varchar(255) DEFAULT NULL,
      \`city\` varchar(255) DEFAULT NULL,
      \`state\` varchar(255) DEFAULT NULL,
      \`contact\` varchar(255) DEFAULT NULL,
      \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
      \`deletedAt\` timestamp NULL DEFAULT NULL,
      PRIMARY KEY (\`id\`),
      KEY (\`name\`)
    )
    `,
    down: 'DROP TABLE IF EXISTS people'
}