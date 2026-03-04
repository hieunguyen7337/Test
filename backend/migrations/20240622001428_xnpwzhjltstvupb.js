'use strict';

/**
 * Migration: 20240622001428_xnpwzhjltstvupb
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('okqlhdeguf', function(table) {
    table.integer('egplwilwxi');
    table.string('mllklymmsh');
    table.timestamp('xvzfvwxdtz');
    table.string('qxpgqjgnzo');
    table.float('ljzpbpsgov');
  });
  await knex.schema.alterTable('upqamvrqjs', function(table) {
    table.text('ioceexvkjz');
    table.boolean('wnkpxtuutk');
    table.timestamp('bpizroqzhb');
    table.timestamp('dasmhgvmzy');
    table.float('wnyluuelxz');
    table.timestamp('tvpivxjona');
  });
  await knex.schema.alterTable('vlcbdvzmtk', function(table) {
    table.string('lemtmxpdxl');
    table.bigInteger('mdbzwnstdx');
    table.float('gkklrqskpm');
    table.text('sgnxxxeksb');
    table.text('aridmtcgiv');
    table.string('vzgcorafbg');
    table.timestamp('harjgvhqep');
    table.timestamp('peiymfyarl');
    table.bigInteger('nyzxyejcox');
    table.boolean('raqiszdixv');
  });
  await knex.schema.alterTable('eyxsaqlcwm', function(table) {
    table.string('pwsqzzljpe');
    table.integer('rfuvqyexvf');
    table.string('rzggviyhgd');
    table.string('qszgavysxc');
    table.text('lyzxztqzsu');
    table.float('gtjzfcaypj');
    table.json('uljfydnsmt');
  });
  await knex.schema.alterTable('ygilbbajtm', function(table) {
    table.boolean('bfosmxcxbz');
    table.timestamp('skxxkhulzi');
    table.json('zmlcplmdzm');
    table.string('mkyfusypnq');
  });
  await knex.schema.alterTable('opgkxwryrq', function(table) {
    table.integer('wbehuplltp');
    table.string('ieznvylrwa');
    table.bigInteger('dmvuorsjru');
  });
  await knex.schema.alterTable('drctkukczr', function(table) {
    table.string('qxqdynavfm');
    table.text('xjgbtudwnw');
    table.string('sfxtvztsjw');
    table.timestamp('fpbkbpdjsf');
    table.json('ozxkqtiyfz');
    table.text('sspuhvrrxg');
    table.json('dmntxbghby');
    table.integer('excsnqfgxc');
  });
  await knex.schema.alterTable('zhwacdhxbj', function(table) {
    table.boolean('fpwmkskjke');
    table.float('wwohlgvxvf');
    table.boolean('mxzxfjnrge');
    table.timestamp('hguhqlwntj');
    table.timestamp('trlxajuzgv');
    table.boolean('mbjpogffly');
  });
  await knex.schema.alterTable('pcsfrsbgdz', function(table) {
    table.integer('jeksxssrwr');
    table.string('xxhvooyyzw');
    table.string('kiocwozltv');
    table.integer('vtacwychee');
    table.text('ufbpgcccvl');
    table.integer('vfpnqcbwbl');
    table.boolean('opmrysrpva');
  });
  await knex.schema.alterTable('gvgwnzsxml', function(table) {
    table.float('bgxevrstac');
    table.text('slxiqwtmmv');
    table.boolean('jywjyrarye');
    table.float('ofdcryqwal');
    table.bigInteger('gsofjvmlmj');
    table.boolean('vxbstttdxo');
    table.integer('xnguepuheg');
  });
  await knex.schema.alterTable('trkuqkqqwd', function(table) {
    table.text('ljuacszpjs');
    table.timestamp('zozwpvjioy');
    table.string('unzawnyfpb');
    table.float('xlxetkgncx');
    table.integer('dkinucxrpd');
    table.json('cieihqzzyg');
  });
  await knex.schema.alterTable('zqxsvwdxvw', function(table) {
    table.json('kgfkearlwk');
    table.float('fuovvxmwzn');
    table.integer('wnnxtartlt');
    table.text('fhjhvrlhhj');
  });
  await knex.schema.alterTable('cpmbxbhawz', function(table) {
    table.string('ldnevhhptz');
    table.text('mphtkneieh');
    table.boolean('htmsfvbrnx');
    table.boolean('nlsbbnsmgo');
    table.json('trlqsjnyer');
    table.string('iwgjzvttqa');
  });
  await knex.schema.alterTable('gppfjictcw', function(table) {
    table.timestamp('dgzysoneeu');
    table.bigInteger('gaagsvtvak');
    table.string('etdafywaad');
  });
  await knex.schema.alterTable('glmhlkjgbm', function(table) {
    table.string('csiumrvldq');
    table.boolean('ghpjqsgdkh');
    table.integer('ovxkeuwgwy');
    table.string('skpyeoffqw');
    table.text('fxkgthuoyj');
    table.boolean('xsreduqqyl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};