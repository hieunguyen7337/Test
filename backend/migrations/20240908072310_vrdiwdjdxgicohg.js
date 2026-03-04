'use strict';

/**
 * Migration: 20240908072310_vrdiwdjdxgicohg
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ipjfgeprkf', function(table) {
    table.json('gcccibjsgk');
    table.json('dehjnhtkyr');
    table.float('dwtfyrfayy');
    table.float('hddevuzwsh');
    table.bigInteger('mhdvaslgtw');
    table.timestamp('fjxlwdrbwo');
    table.timestamp('eevzuqukhd');
    table.integer('pezsvsjufx');
    table.timestamp('ubafogwawa');
  });
  await knex.schema.alterTable('jgrxtxbxob', function(table) {
    table.timestamp('emuxfvxvqn');
    table.string('umuklppjpx');
    table.timestamp('apwoysvyhp');
    table.bigInteger('aibfxubyrr');
    table.text('kjqfxglrte');
    table.timestamp('lwhycjlnnj');
    table.integer('iohqpksbok');
    table.float('cekdvatucl');
    table.text('spqmlxqocv');
    table.bigInteger('nwqlvgcbpf');
  });
  await knex.schema.alterTable('fzleamckhg', function(table) {
    table.timestamp('kyxieugtxt');
    table.boolean('wesygqertf');
    table.timestamp('iqsldgtidh');
    table.timestamp('mbesnimpdi');
  });
  await knex.schema.alterTable('dmvbvrdvnz', function(table) {
    table.float('cvwsouhwph');
    table.json('unmfhyxhng');
    table.bigInteger('epoaufplxj');
    table.integer('pswqapyugn');
  });
  await knex.schema.alterTable('zfwrwnwzfw', function(table) {
    table.timestamp('akhaghwejh');
    table.json('qdvmcqpwcl');
    table.text('plugsvceob');
    table.string('stepepehcs');
    table.float('urdbokqfug');
    table.bigInteger('vvomgytaxw');
    table.bigInteger('potngbeiqr');
  });
  await knex.schema.alterTable('ntakiqmkki', function(table) {
    table.float('nsbeydypox');
    table.text('ebppmtpset');
    table.float('ejcsmjqouu');
    table.boolean('clklabnqdp');
    table.json('sqzdtywwum');
    table.float('etdpiwbiew');
    table.string('cuhglvanhg');
  });
  await knex.schema.alterTable('szsbvazwvb', function(table) {
    table.timestamp('nqhcptidom');
    table.boolean('hcoxkuewho');
    table.string('gfjtljbpzt');
    table.string('ijmdmdvfkc');
    table.timestamp('novgcozobg');
    table.bigInteger('dogckipfeg');
  });
  await knex.schema.alterTable('pogndpihcj', function(table) {
    table.bigInteger('pijpxvbhls');
    table.bigInteger('jypiooflsy');
    table.integer('zzrzwhbbnf');
  });
  await knex.schema.alterTable('jasyqyxpxg', function(table) {
    table.json('vqwrmridmz');
    table.string('honvwtuwke');
    table.integer('dutizqtmyg');
  });
  await knex.schema.alterTable('wdfoduwsgt', function(table) {
    table.text('fpxgnbqukq');
    table.timestamp('nuumhzmowp');
    table.timestamp('xzfhwduwpe');
    table.bigInteger('gtbichnqrc');
    table.bigInteger('zmtnplkmri');
    table.text('avdifxbjst');
    table.timestamp('ktiqusnufk');
    table.timestamp('pxbjinanyc');
    table.timestamp('uvshenkvvc');
    table.text('qziceoqlpv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};