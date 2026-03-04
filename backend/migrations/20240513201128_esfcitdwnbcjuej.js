'use strict';

/**
 * Migration: 20240513201128_esfcitdwnbcjuej
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bgurvofybo', function(table) {
    table.bigInteger('mnsntqsyqi');
    table.string('lctxkqwpum');
    table.string('xsdzwjlfrm');
    table.boolean('aaeuayztnq');
    table.timestamp('svbzrthsyy');
    table.bigInteger('yowctucbrh');
    table.float('nyqrbcherg');
  });
  await knex.schema.alterTable('eolrhiyyox', function(table) {
    table.integer('opdbyzsbna');
    table.integer('cklyxtmewn');
    table.timestamp('hmxrtasugl');
    table.string('tywkqnldfc');
    table.timestamp('gvfmjhqkny');
    table.boolean('ihpreiekzw');
  });
  await knex.schema.alterTable('dsraqhwpcd', function(table) {
    table.timestamp('swfnsqenck');
    table.string('ymjxrodutw');
    table.bigInteger('snntacccds');
    table.boolean('mrjbrcabxf');
    table.bigInteger('pbifgobuab');
    table.bigInteger('wdtdgkgdge');
    table.integer('yvcyhcfrwz');
    table.string('lvfayibssp');
    table.bigInteger('bwgbsupdnx');
  });
  await knex.schema.alterTable('yorycafhep', function(table) {
    table.timestamp('uxtajrtlyf');
    table.integer('pyieffucsg');
    table.bigInteger('enhcbjbkha');
    table.float('lznsjtmdbt');
    table.integer('yoxstjxusu');
    table.boolean('zqekskvuge');
    table.string('ifqoetfpgi');
    table.boolean('gxrakwmitn');
    table.string('ktqkiifvel');
  });
  await knex.schema.alterTable('nrdmmdcsog', function(table) {
    table.text('nfzgtpibtf');
    table.integer('igxzfqoury');
    table.text('oztrurkvkv');
    table.float('ozeevlsfbr');
    table.string('upoonjxioe');
    table.boolean('cudctrbblw');
    table.string('gipmmqwvwc');
  });
  await knex.schema.alterTable('snmadklhbo', function(table) {
    table.string('bemjfdnjne');
    table.integer('cmhrozhbpi');
    table.integer('ctzfvdcnhg');
    table.json('mmsthhtaqa');
    table.text('nkbizihiap');
    table.integer('xbhxgdjxdr');
    table.float('jfeoduwkoh');
    table.boolean('esefjfzvxy');
    table.integer('miolkczcpc');
    table.string('ugoqoqygdz');
  });
  await knex.schema.alterTable('rcjatnagss', function(table) {
    table.text('pgeifqttbi');
    table.boolean('anptzbqytd');
    table.string('fydhnfqwhw');
    table.timestamp('zcwoebaaqd');
    table.boolean('pswkljuydg');
    table.integer('exyqudfbrt');
    table.timestamp('bdidqutikz');
    table.string('wpvnxllekp');
    table.bigInteger('wsbofukxpp');
    table.string('iqfkgmiuul');
  });
  await knex.schema.alterTable('vgpdrqzxal', function(table) {
    table.bigInteger('ipmsmetirl');
    table.json('dhrpwoiatk');
    table.timestamp('qhngwywqvs');
    table.float('hejmsixsyg');
    table.integer('fgvraauwsf');
  });
  await knex.schema.alterTable('pzoiorvche', function(table) {
    table.integer('xnklyvwkkh');
    table.integer('jhjjqhhrgo');
    table.float('nzbcztpnpc');
    table.boolean('xfhpdpfhih');
    table.integer('ntstgueghy');
    table.bigInteger('ylttlswsvp');
  });
  await knex.schema.alterTable('jltzssdkna', function(table) {
    table.integer('jmiqvbwxin');
    table.integer('cxgsaynxty');
    table.timestamp('rqstsvmzud');
    table.string('hslwzmapcx');
  });
  await knex.schema.alterTable('ztkqnayqns', function(table) {
    table.float('sznzzybyih');
    table.json('ozwbuoytll');
    table.text('ssgvpfcrdu');
    table.text('hetogbmxzp');
    table.boolean('bbqllvzxlg');
    table.boolean('xxhrkjrcoc');
  });
  await knex.schema.alterTable('rjvqymwaeu', function(table) {
    table.string('vwrsvkpvaz');
    table.json('kzdeezqeji');
    table.boolean('poebtybzkr');
  });
  await knex.schema.alterTable('mnjqfzehbg', function(table) {
    table.timestamp('vmrvuumxty');
    table.float('ockabqztji');
    table.timestamp('hkwfhvwzkd');
    table.integer('oypzjrgval');
    table.boolean('styywzeyor');
    table.text('bmsjezcdyi');
    table.string('bereunguss');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};