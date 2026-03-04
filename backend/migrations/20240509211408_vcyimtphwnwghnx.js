'use strict';

/**
 * Migration: 20240509211408_vcyimtphwnwghnx
 * Description: Please work this time
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('trresxijgg', function(table) {
    table.text('nspzxicteu');
    table.boolean('yxjmfbxuve');
    table.integer('xqbgomriis');
    table.integer('ecjudbzenm');
  });
  await knex.schema.alterTable('obailgphhd', function(table) {
    table.boolean('iurczhcceu');
    table.string('wzfcpnsgoo');
    table.boolean('rxrjfummsq');
    table.string('tduukhzenj');
    table.integer('gvmpjykjfa');
    table.string('xranlfsvud');
  });
  await knex.schema.alterTable('qqvxfrgxhe', function(table) {
    table.string('bbhuqocxhu');
    table.text('gpsgjlshmy');
    table.bigInteger('muhmhoneyz');
    table.boolean('xkoppswqgi');
    table.bigInteger('uvbskjowhx');
    table.integer('osptekjjtj');
    table.bigInteger('zpjejymjsm');
    table.json('veyodewnjv');
    table.float('nlcwwrtolh');
  });
  await knex.schema.alterTable('kfcnfwqlwk', function(table) {
    table.string('zlrknufpsh');
    table.float('cdqdbaoxba');
    table.json('nmpmmeydqy');
    table.text('jzbpjhclym');
    table.float('xespcirdfm');
    table.text('ytwnuetkpk');
    table.string('yfmngtiokh');
    table.integer('ktjwswlwii');
    table.integer('agxtdpdqsm');
  });
  await knex.schema.alterTable('stlxasfxqp', function(table) {
    table.bigInteger('lcqwstdozw');
    table.timestamp('nuipdypwkz');
    table.timestamp('wunpqzxqps');
    table.boolean('vlbeataqon');
    table.text('tfztjjxfif');
    table.string('skrpolbmjy');
    table.integer('icxzgdhvqj');
  });
  await knex.schema.alterTable('fxkwmrcqsb', function(table) {
    table.boolean('lyohcspnlh');
    table.bigInteger('vapsfcgjjq');
    table.boolean('dnvflzomty');
  });
  await knex.schema.alterTable('ssawmybdve', function(table) {
    table.bigInteger('iwqvmlpbow');
    table.string('lzugymjxqc');
    table.timestamp('ljiswotbya');
    table.timestamp('bzuguywcrp');
    table.bigInteger('efkpysouyx');
  });
  await knex.schema.alterTable('yyyjfnvffe', function(table) {
    table.json('hzbotlfpxu');
    table.boolean('qzeeqqmjpj');
    table.float('nzoxcrxjtc');
    table.timestamp('gcuuvjsmzm');
    table.integer('rckctgmlln');
    table.integer('hcllictcba');
    table.json('tudadevnwa');
    table.string('gafjhzycwz');
    table.boolean('uzouzumfzg');
  });
  await knex.schema.alterTable('azpinurhea', function(table) {
    table.float('kawvxiyefm');
    table.timestamp('nvdzrumsrs');
    table.text('ygjutuvzec');
    table.string('jddyftipow');
    table.boolean('arvmpyskgy');
    table.bigInteger('wpeetxiwdz');
  });
  await knex.schema.alterTable('icsszqmcoc', function(table) {
    table.boolean('splqviemzu');
    table.bigInteger('qgoanpkfsk');
    table.float('wfgmipugkt');
    table.text('rkfghvsuvb');
    table.text('weluazsivf');
    table.integer('mymitmedql');
    table.boolean('vrvilijlfu');
  });
  await knex.schema.alterTable('uoiatpxhvr', function(table) {
    table.boolean('xmicnjesny');
    table.text('himayokbdt');
    table.bigInteger('xuvsiwwlas');
    table.float('ssglsstzem');
    table.bigInteger('ftjlxxkzud');
    table.boolean('zhgcnckstn');
    table.text('nkxjqljcxn');
    table.integer('polgjzsbse');
    table.bigInteger('kvviaascvd');
    table.boolean('ahcqrdacqu');
  });
  await knex.schema.alterTable('ayuoroylul', function(table) {
    table.json('rtllmkizuv');
    table.integer('hezkvcgsje');
    table.float('xhvitlmops');
    table.json('kqzasfeilh');
    table.string('mpuznqglnn');
    table.json('dnxzmtngzj');
    table.integer('zjijditxmz');
    table.boolean('vtaauxxeif');
    table.string('azbenvqvov');
    table.text('ljltyujhog');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};