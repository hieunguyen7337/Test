'use strict';

/**
 * Migration: 20240911114333_wqzrwaoadmwkpvb
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bgmpynxepz', function(table) {
    table.string('przuuqdcyn');
    table.float('rjarsobvyg');
    table.json('kmurtfmbhs');
    table.string('skwlelvvyt');
    table.timestamp('oiytgyhuof');
    table.float('ekjhqtrthr');
  });
  await knex.schema.alterTable('wadptpzydx', function(table) {
    table.string('dzjsfpkfva');
    table.integer('ovasepzque');
    table.string('unglhikzjw');
    table.string('wrnbtspued');
  });
  await knex.schema.alterTable('ftvyphjnvl', function(table) {
    table.json('vyogynxufu');
    table.text('pgkognmekp');
    table.float('tvgwfpsikd');
  });
  await knex.schema.alterTable('tsrmgumqnu', function(table) {
    table.float('yyjxljkyjh');
    table.bigInteger('jgyggsrbqo');
    table.boolean('elvprdcesg');
    table.integer('ntcodaiyzw');
    table.float('cuhwuefegv');
  });
  await knex.schema.alterTable('ahvmtppehw', function(table) {
    table.timestamp('jfwbdteuag');
    table.string('ktwlkwfcgo');
    table.json('ocuyjvckto');
    table.string('dpxkffojug');
    table.json('umvdqrlqzh');
    table.float('xdtuzxgkij');
  });
  await knex.schema.alterTable('xjqdyzpgtl', function(table) {
    table.string('vyeczhbhgp');
    table.float('fbnvswnhsg');
    table.json('cehsorfrvc');
    table.boolean('zvaptahdpj');
    table.bigInteger('ljvivqhuta');
    table.string('gfrenyxgpo');
    table.bigInteger('fbmcfawpyj');
    table.json('qduseikuls');
    table.integer('iuqeselhob');
  });
  await knex.schema.alterTable('ttriwiixsw', function(table) {
    table.string('kglmkjidhi');
    table.bigInteger('zoeybuqdsr');
    table.timestamp('utriajcoyz');
    table.boolean('pyvkuonsxi');
    table.boolean('ytvvfzslee');
    table.timestamp('jgpuqdgned');
  });
  await knex.schema.alterTable('ahljmqnogu', function(table) {
    table.bigInteger('txhzrbmkal');
    table.text('wjesxdojau');
    table.json('wywloucrdk');
    table.string('xhiaijcrwy');
    table.text('tarxpnstrb');
    table.text('kmtmlvcnch');
    table.float('erfuphgeqs');
    table.float('fpmswoyvet');
    table.boolean('twpwvyoujk');
  });
  await knex.schema.alterTable('cunewqhoaa', function(table) {
    table.timestamp('sxveihjlqh');
    table.integer('ymnhttrbgc');
    table.boolean('etaiywcusm');
    table.text('rkfyhxdjhs');
    table.bigInteger('hmqpnopiyi');
    table.string('qliikigwvw');
    table.integer('ilzrbxprjd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};