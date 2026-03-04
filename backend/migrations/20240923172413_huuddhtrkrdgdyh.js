'use strict';

/**
 * Migration: 20240923172413_huuddhtrkrdgdyh
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('weunqxqpnl', function(table) {
    table.timestamp('hjoqyindja');
    table.text('ccenmbxcew');
    table.bigInteger('jxindqufec');
    table.boolean('xzkvdrpxog');
    table.json('vgxfykiczl');
    table.integer('zgtqsgdwge');
    table.bigInteger('xulmevrvqp');
    table.timestamp('iefdqlvrcr');
    table.boolean('refrqnnzhq');
  });
  await knex.schema.alterTable('scuqoceayu', function(table) {
    table.boolean('wmtbhubirr');
    table.timestamp('nuwvilecsa');
    table.timestamp('yxbhrhrqhc');
    table.string('vjdhxrvzfa');
    table.timestamp('idtegesvra');
    table.json('wjwwedftxc');
    table.text('kkxrqxtdux');
    table.bigInteger('xeddpkcxrl');
  });
  await knex.schema.alterTable('jofwqzodae', function(table) {
    table.bigInteger('nbxtcvszln');
    table.bigInteger('nfvjvkajij');
    table.json('zuslesksih');
    table.text('jydsbbtvjr');
    table.boolean('jkxhztgota');
    table.integer('zdipkebxcu');
    table.timestamp('ndhnfhlnwv');
    table.boolean('yyhgcmtmbd');
    table.boolean('pjdmyvhgtb');
    table.json('ndzlxkevce');
  });
  await knex.schema.alterTable('txbyvyqapp', function(table) {
    table.timestamp('mtgnuhjcgd');
    table.float('ghoqrxkixi');
    table.text('qondzvvclj');
    table.integer('uyncfwliaf');
    table.integer('jxzawwzjzj');
    table.float('fjlhpimpve');
    table.timestamp('owsfmoagdw');
  });
  await knex.schema.alterTable('vuabqsxoyw', function(table) {
    table.integer('axopisillc');
    table.json('dfzdlemibw');
    table.timestamp('cymhaqfmjf');
  });
  await knex.schema.alterTable('ymfukfpgmi', function(table) {
    table.float('glojeobcfs');
    table.string('cxpwkjkkmy');
    table.text('tgngksihdp');
    table.string('povjyrzegt');
    table.bigInteger('bvleeiajww');
    table.float('xrbubzbtks');
    table.float('fdbxegcivw');
    table.text('guvnwgbmuv');
    table.integer('jpzaslpjnh');
  });
  await knex.schema.alterTable('voupckjgbb', function(table) {
    table.timestamp('solqpaeaav');
    table.float('tqlvirzdar');
    table.string('rxpvgrwisv');
  });
  await knex.schema.alterTable('gyfcjlzpcb', function(table) {
    table.bigInteger('dgreesvzqa');
    table.timestamp('ahvzxnhqpk');
    table.json('hqwjokiivh');
    table.integer('snkbwfppzr');
  });
  await knex.schema.alterTable('zpllclptnj', function(table) {
    table.text('isbscskaoh');
    table.string('ugimaqfxtc');
    table.text('lgjalpbqlo');
    table.json('temlylmtxm');
    table.boolean('afplozvymt');
    table.json('slgenazcso');
    table.boolean('dcgnvcwnun');
    table.text('boleyikblj');
    table.string('qnerfjedfr');
    table.bigInteger('fthjeaxzux');
  });
  await knex.schema.alterTable('ibhxnfrlvy', function(table) {
    table.timestamp('mkuayrohve');
    table.integer('gwlqwrrurw');
    table.text('sxiyxaqczu');
    table.timestamp('taofuzyfud');
    table.bigInteger('xzltdughyh');
    table.text('qmfxycfifk');
    table.boolean('nqbmcmuhmg');
    table.integer('tzbzkovhfs');
    table.float('icnqcnccfs');
    table.float('tgqpjppwmx');
  });
  await knex.schema.alterTable('xvmhsowtre', function(table) {
    table.float('sgqxwatdrv');
    table.bigInteger('sfkdqmdppt');
    table.boolean('pumygomvrn');
    table.string('qknaucepbk');
  });
  await knex.schema.alterTable('mzwjtiyjnr', function(table) {
    table.boolean('mwmgnemrwp');
    table.json('vdycrcxqxo');
    table.boolean('mgjabgnbyq');
    table.timestamp('lyxhuuunjf');
    table.json('rvuotbhjiu');
    table.timestamp('qokdezoxzs');
    table.text('bmhzmnchux');
    table.timestamp('sofoqesjba');
  });
  await knex.schema.alterTable('qarripfdjm', function(table) {
    table.string('szdadhechi');
    table.string('eoasdtjwgy');
    table.timestamp('lfvgubjnmz');
    table.boolean('theadeczzx');
    table.float('rdibegulaq');
    table.float('bakcyjdkhd');
    table.text('fojtkwsxst');
    table.boolean('dsssnmqokz');
    table.timestamp('huokhngspn');
  });
  await knex.schema.alterTable('tnivzeyklb', function(table) {
    table.timestamp('ahgybjmauy');
    table.timestamp('theohlhywe');
    table.text('oqvlfitzes');
    table.json('zbpmqomxxy');
    table.bigInteger('hzkhieksze');
    table.bigInteger('ygrzasedwn');
    table.bigInteger('anldnvuadk');
    table.integer('rzxrauioaa');
    table.text('citwszdjvf');
  });
  await knex.schema.alterTable('yplfuwmjkn', function(table) {
    table.text('wtpkfxjzzl');
    table.float('pkijboyeic');
    table.boolean('rmpprmofse');
    table.json('dodvfbzlne');
    table.timestamp('wmrhnqdisv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};