'use strict';

/**
 * Migration: 20240302113441_mteqtjcxfkrmxht
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hupstmjmgs', function(table) {
    table.float('yiuzvcfvgc');
    table.json('rzxqjljtac');
    table.boolean('mybekotlwg');
    table.integer('aqhraqbdac');
    table.float('ucvwkrfrds');
    table.integer('fetjytnlsr');
    table.integer('thjbqyokrn');
    table.integer('dzxqnrftbi');
    table.integer('bjqneedvah');
  });
  await knex.schema.alterTable('okedspmxgd', function(table) {
    table.json('sigmyakuuz');
    table.bigInteger('onwcnmeoqc');
    table.boolean('iieibcmzzu');
  });
  await knex.schema.alterTable('pukbqqlthp', function(table) {
    table.float('sbvramwyhy');
    table.timestamp('zguqgrojip');
    table.text('qwipbilgec');
    table.json('vtohwrbjzf');
    table.text('vyrqmgrgiz');
    table.boolean('fnskeafjpq');
  });
  await knex.schema.alterTable('qeavihuftg', function(table) {
    table.boolean('nnhcqjgkux');
    table.boolean('rdwlxjjpmb');
    table.string('wixoijbjkd');
    table.string('uezhfvatmz');
    table.bigInteger('uyrxhwaagi');
    table.text('vjiducagpk');
    table.integer('aopjgnzfhm');
  });
  await knex.schema.alterTable('rbpizvhryw', function(table) {
    table.float('gfzjkksstq');
    table.bigInteger('dzqqphfgjs');
    table.timestamp('qqldnfzwjd');
    table.bigInteger('edtvolcoeu');
    table.float('aonjfrlpgp');
    table.float('gglnakouqv');
    table.integer('nawrycfkbu');
    table.boolean('qsyhrddfjq');
    table.json('dncmxhtecs');
  });
  await knex.schema.alterTable('mnyxijeivl', function(table) {
    table.integer('fjpkejxahf');
    table.json('pknhoaswfg');
    table.integer('ohsopghttx');
    table.boolean('yihpwboehm');
    table.integer('fbzypdditr');
    table.json('kedirsaeed');
    table.bigInteger('jcgtkmzkak');
    table.string('xaqmzuedmk');
    table.boolean('ufuumzxisn');
  });
  await knex.schema.alterTable('bgivtzwaul', function(table) {
    table.text('qbybmwwnpc');
    table.timestamp('daqdenoggh');
    table.json('ugvwiynzxq');
    table.text('xtvotckqrx');
    table.timestamp('lgcoccpsfl');
    table.integer('luilmzsfha');
    table.string('ldclscmhya');
    table.timestamp('lpytjpvolt');
  });
  await knex.schema.alterTable('dsgidqiuyq', function(table) {
    table.json('wwfqhvzdcu');
    table.bigInteger('tdjhoinweu');
    table.bigInteger('vgplaavnse');
    table.json('egpyscekjy');
    table.timestamp('kqzjobfwxf');
  });
  await knex.schema.alterTable('lseznjomgs', function(table) {
    table.float('fhnbpxaipn');
    table.text('egqddeprnc');
    table.float('moraxyangr');
    table.json('kmdeobzvbg');
    table.string('tqtfnchtcw');
    table.json('vpzvgpaeew');
  });
  await knex.schema.alterTable('nbmckljdke', function(table) {
    table.boolean('vfabxvgjkv');
    table.timestamp('pajxscuxqx');
    table.boolean('oitpxpnbjg');
    table.bigInteger('wiglthgmqn');
    table.text('dpunlfsslr');
    table.timestamp('xuskydiufl');
    table.boolean('fhxmhnkzwa');
    table.bigInteger('stvkhpclhs');
  });
  await knex.schema.alterTable('yslvgvijaw', function(table) {
    table.string('afwntcivjw');
    table.timestamp('ggiweagrgo');
    table.text('nbkpaflaul');
    table.timestamp('gheetzzcdy');
    table.boolean('jjkylxfeyx');
    table.integer('ehxagtyysh');
    table.string('xnrwufvrcd');
  });
  await knex.schema.alterTable('rbmzkqddvl', function(table) {
    table.bigInteger('deiifxqozf');
    table.bigInteger('tyahibhfho');
    table.json('rqzxvhjlrx');
    table.text('zelbonelnp');
  });
  await knex.schema.alterTable('ofnszgcohw', function(table) {
    table.float('srqbewikri');
    table.float('dtxxkysfny');
    table.boolean('gkzkkrgavd');
    table.float('ljpkbumcet');
    table.string('dqgarahcox');
  });
  await knex.schema.alterTable('fuiicrelmk', function(table) {
    table.string('zmdqufebnf');
    table.timestamp('xmzgawepjs');
    table.integer('sreqkwowqh');
    table.timestamp('wzgiyparmq');
  });
  await knex.schema.alterTable('kovepuhhul', function(table) {
    table.bigInteger('ksdimyzzqj');
    table.json('daxkufxgln');
    table.integer('svkhrxkqta');
    table.bigInteger('dxrqwvwlns');
    table.float('ymafjevpcb');
    table.bigInteger('gjslszbjzd');
    table.float('smhkfllplj');
    table.boolean('ntjkjctllo');
    table.boolean('yqqrpvofzw');
  });
  await knex.schema.alterTable('ngbvfpxrix', function(table) {
    table.timestamp('ylngsifkqa');
    table.float('eobensxmct');
    table.string('aglcwbyxcy');
    table.json('ipplwhmmjw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};