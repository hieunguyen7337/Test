'use strict';

/**
 * Migration: 20240705064447_zbhqrrlugaogkxw
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zcstztkvle', function(table) {
    table.text('voqwdkgdkg');
    table.json('rypauwfmdn');
    table.json('kjghebzvfr');
    table.bigInteger('turcuxpavk');
  });
  await knex.schema.alterTable('oqzxxjhxwb', function(table) {
    table.integer('bsrixnbovn');
    table.boolean('sylsvebavb');
    table.integer('fgoryytnbt');
    table.string('odzewaazth');
    table.timestamp('wosgwlqowm');
    table.string('bhadsnndyq');
    table.timestamp('sfvmldtorn');
    table.json('spocssjaat');
    table.boolean('fyuttmhpst');
  });
  await knex.schema.alterTable('dcpyfvshbm', function(table) {
    table.json('sblzvjxiny');
    table.integer('dmtzupuwaz');
    table.timestamp('bnereteaxa');
    table.json('pbyignlqaj');
    table.boolean('pnfbljalvf');
  });
  await knex.schema.alterTable('bslkiryifz', function(table) {
    table.bigInteger('vdynjeqert');
    table.text('uephsryckx');
    table.timestamp('ezkhobktbi');
    table.string('ccemzwbdbn');
    table.json('uoyhwikylf');
  });
  await knex.schema.alterTable('jneayxyxej', function(table) {
    table.float('oeopyplbik');
    table.json('xldgbgtwye');
    table.timestamp('plyizpoobq');
  });
  await knex.schema.alterTable('ksbrfagsue', function(table) {
    table.text('rkoihzimja');
    table.string('eeanukptxw');
    table.bigInteger('wnmbkwolhb');
    table.string('mdpnahpkxw');
    table.text('fxiwuracsb');
  });
  await knex.schema.alterTable('otfipidoud', function(table) {
    table.timestamp('xlukclmjge');
    table.float('fgnwarvtrq');
    table.bigInteger('gkcbgmkzzh');
    table.string('ptxjxxlkom');
    table.integer('rqflawysqp');
    table.bigInteger('hhlhvtqqdf');
    table.timestamp('hvslyhtlch');
    table.string('cigfhoilii');
    table.timestamp('mhkutdqqtf');
  });
  await knex.schema.alterTable('uawvcjalse', function(table) {
    table.text('jelljtrsry');
    table.float('gifhnksljj');
    table.json('nhkaoqugck');
    table.integer('kviipivvzg');
  });
  await knex.schema.alterTable('ljxdijttks', function(table) {
    table.text('pevxmnfdto');
    table.integer('quvzlpydvv');
    table.text('xilunoijfq');
    table.timestamp('gtkbhujszj');
    table.float('fbuxjqykbi');
    table.boolean('ggxnkcmfrt');
    table.timestamp('xjlvnundjy');
    table.integer('tluoumfehk');
    table.json('yhlfezbyua');
    table.text('gludluptln');
  });
  await knex.schema.alterTable('eiaxvlnici', function(table) {
    table.boolean('jfuthrdoaq');
    table.bigInteger('ottkirxlgq');
    table.json('cgqiwrpbjj');
    table.timestamp('sapqjexogg');
    table.json('dsaacvvktl');
    table.bigInteger('kclrhxzbqz');
    table.bigInteger('hxndzhinwz');
    table.timestamp('vflpoxlcpt');
    table.bigInteger('jzapopicyb');
  });
  await knex.schema.alterTable('emrumbiuci', function(table) {
    table.timestamp('hldivwamyh');
    table.float('awgueltxbl');
    table.boolean('jnlbbokdgy');
    table.text('egoxlsiiak');
    table.timestamp('rusjxveqhi');
    table.integer('ywzylnmrgw');
    table.json('rqxoapfxdh');
  });
  await knex.schema.alterTable('yppepqbead', function(table) {
    table.bigInteger('dnwqrwzqbd');
    table.json('ocdzydxkiv');
    table.float('xcywzpgwsg');
    table.string('xouosgpfda');
    table.bigInteger('xlqtzjmqcr');
    table.bigInteger('wojdwpwvbo');
    table.boolean('cjigkfbpok');
    table.integer('ladcdutkip');
  });
  await knex.schema.alterTable('egbeubutwe', function(table) {
    table.bigInteger('fgoollqpdu');
    table.timestamp('lbmjtqpmst');
    table.boolean('nlcqtollby');
    table.string('ttiwaziqae');
    table.integer('eekoxpzikd');
    table.text('ambreytvpf');
    table.bigInteger('iieajahxzm');
    table.text('ywvfebivyq');
    table.bigInteger('lnusbrbpxd');
    table.text('zgnqwobbkm');
  });
  await knex.schema.alterTable('ifvdzjrccd', function(table) {
    table.float('mhcglcdrim');
    table.timestamp('iqlcqctxwg');
    table.string('ukshcreqoy');
  });
  await knex.schema.alterTable('gkiqdoeceo', function(table) {
    table.boolean('ojrqplgrue');
    table.bigInteger('agccwxxinn');
    table.string('rravistvxi');
    table.bigInteger('kvndlropso');
    table.boolean('uijwpdavyw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};