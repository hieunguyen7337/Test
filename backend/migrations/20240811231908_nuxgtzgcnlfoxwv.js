'use strict';

/**
 * Migration: 20240811231908_nuxgtzgcnlfoxwv
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('atkeroyfny', function(table) {
    table.bigInteger('ptkhppyehk');
    table.string('lhatigrehy');
    table.boolean('vymkocvlpu');
    table.timestamp('ojjxfwyycg');
    table.json('rlbiswfzuf');
    table.integer('rkeordipna');
    table.integer('kfjlzxvvtq');
    table.float('cagmdgbiif');
  });
  await knex.schema.alterTable('gbgluvtvwg', function(table) {
    table.text('wzeojaavhs');
    table.text('iiloglfrqf');
    table.integer('eepmauvplx');
  });
  await knex.schema.alterTable('nzfpoipvxe', function(table) {
    table.bigInteger('jtaxxjqszy');
    table.integer('eqnegmrsqw');
    table.bigInteger('mrimeqellv');
    table.json('yfqrinrcyo');
    table.bigInteger('rhapzcykfc');
    table.integer('cgjlcgnyuk');
    table.bigInteger('dazcydhceb');
  });
  await knex.schema.alterTable('jxtbrgshuq', function(table) {
    table.text('qpdaehxnga');
    table.string('ouqfyjmjsk');
    table.bigInteger('vodpdbygbv');
    table.boolean('btqhxtubun');
    table.integer('scloajtrtf');
    table.bigInteger('vkaltlnzrx');
    table.float('kjrjxgfdoo');
    table.bigInteger('oxfqlihcxv');
    table.json('zpjbsnejhz');
    table.json('seeaqladpw');
  });
  await knex.schema.alterTable('qoeeylgmbp', function(table) {
    table.string('aponbwksaz');
    table.boolean('upamtxnvjy');
    table.timestamp('skxwlkmrsh');
    table.timestamp('gjkixavhkm');
    table.string('nbimsphrav');
    table.timestamp('steenzjbbv');
    table.bigInteger('mxcyqweffa');
    table.json('wxwgyoedvx');
    table.float('kcumaqqqti');
    table.timestamp('gccfxdobry');
  });
  await knex.schema.alterTable('anshybgtth', function(table) {
    table.json('jsuoaaamuu');
    table.text('brqeiyoagv');
    table.string('whhudrcabu');
    table.boolean('wzfkqdruyh');
    table.float('pbejsdxizi');
    table.string('fcajfouyty');
    table.float('rxhbvsymgk');
    table.boolean('xrkdynojbl');
  });
  await knex.schema.alterTable('cdbjcqgfsb', function(table) {
    table.bigInteger('hkhxicehur');
    table.string('isyijgzbuh');
    table.string('shuecdpwww');
    table.boolean('mqwpbypsos');
    table.json('lnclyuruzy');
    table.bigInteger('lzfhzvtioj');
    table.json('iloffoxexq');
    table.bigInteger('hnlcmojiyy');
    table.float('hiprpsmjft');
    table.json('vjetwrgqhy');
  });
  await knex.schema.alterTable('upxvmcxyvz', function(table) {
    table.text('elqbfjdyao');
    table.float('afntegehgf');
    table.text('mwkniqfdrx');
    table.integer('qskkvhpzff');
    table.bigInteger('svpaonzvpp');
  });
  await knex.schema.alterTable('wqdgvpajwa', function(table) {
    table.integer('qtypuulhsk');
    table.text('biqhlqezke');
    table.integer('jwjttyznwy');
    table.bigInteger('ktapqhpvke');
    table.integer('mwwbdannvs');
    table.string('ranawunawm');
    table.bigInteger('gdmvrcolkg');
    table.float('brpfhnjzhc');
  });
  await knex.schema.alterTable('eqdvquhnrv', function(table) {
    table.json('qsmgkxdxde');
    table.boolean('bbkdclahtm');
    table.timestamp('bpcejbnwke');
    table.boolean('stefhefavu');
    table.integer('wfycjlftth');
    table.json('zbuqoegqmf');
    table.boolean('robycqlrsg');
    table.timestamp('tzqrxpxypg');
    table.float('vcijimyaom');
  });
  await knex.schema.alterTable('dakucctisc', function(table) {
    table.json('ckxiepbihi');
    table.text('ejbjnryzpu');
    table.float('ufdswkviic');
    table.json('agbkeqznyh');
    table.boolean('oboithlqlh');
    table.integer('rnkhblgebw');
    table.float('orvivvvlpq');
  });
  await knex.schema.alterTable('nucffzclmp', function(table) {
    table.json('tgncazjtpr');
    table.text('qwrlqythgn');
    table.string('rwjkronjoo');
    table.text('jcvytghwlm');
    table.boolean('luibleifzw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};