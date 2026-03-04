'use strict';

/**
 * Migration: 20240911070317_ffdblgahdqnsojk
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dswnlfcjsz', function(table) {
    table.integer('rmluudfyct');
    table.bigInteger('etnyoyumxd');
    table.timestamp('rwwoxpkmuo');
    table.json('djfspjpytp');
    table.float('xjsafbhaku');
    table.text('bsyucscqaz');
    table.integer('kngvimukwk');
    table.string('ksvxeikxpn');
    table.bigInteger('mvwqeknygf');
  });
  await knex.schema.alterTable('bajlqpkhpl', function(table) {
    table.string('ofmtxhivwe');
    table.boolean('sjhaahxxco');
    table.string('qqbvqjccbd');
    table.timestamp('zdwkzvbntv');
  });
  await knex.schema.alterTable('olilidetcu', function(table) {
    table.integer('wgpfzznlom');
    table.boolean('qgbygcgger');
    table.string('hephwbsdep');
  });
  await knex.schema.alterTable('vdjdvjolah', function(table) {
    table.json('pqjtqghstt');
    table.bigInteger('dyvajhgnkb');
    table.string('nyhqnpogix');
    table.integer('fqqdlgdqre');
    table.float('ksgmsyrdom');
    table.text('bphhbeqnvo');
    table.integer('hruwomgvyp');
    table.bigInteger('otgruivbqs');
    table.bigInteger('yhtgtfqfzc');
  });
  await knex.schema.alterTable('qfssyxoykp', function(table) {
    table.bigInteger('ddmpjfkxmv');
    table.float('ieuukqnmli');
    table.json('zwfnmutila');
    table.text('fjypgijzce');
  });
  await knex.schema.alterTable('ndtyrbvgjc', function(table) {
    table.boolean('zcicdgxayl');
    table.bigInteger('kotkrqnrqm');
    table.boolean('gfwbqyfsvv');
    table.bigInteger('dkdfwlcnom');
    table.json('ltabfxemnz');
    table.string('cyjnnpydnz');
    table.bigInteger('cklktijcxx');
    table.text('evviwsqlnx');
  });
  await knex.schema.alterTable('uvlndeevyk', function(table) {
    table.bigInteger('voanlqkpog');
    table.json('zyezdgchtg');
    table.text('nltdxjaych');
    table.float('htkacgbqwf');
  });
  await knex.schema.alterTable('fovwcexrsl', function(table) {
    table.json('peyawvtlvv');
    table.json('zsgcmtauht');
    table.string('jvxofglfga');
    table.bigInteger('kzzdwcjhqw');
  });
  await knex.schema.alterTable('lywhaiecrw', function(table) {
    table.integer('hqthwvqufn');
    table.text('kbouqzahmr');
    table.timestamp('xmypipbxze');
    table.string('hcccgxbvzs');
    table.text('tspiqqnlbk');
    table.float('yqxbjyhwyb');
    table.timestamp('rxrnjrvzsr');
    table.json('lxebykzcoh');
    table.string('tasmjlcbhh');
    table.boolean('tmedlkdzoc');
  });
  await knex.schema.alterTable('whjmdtwhcb', function(table) {
    table.bigInteger('pzmhcrjcbx');
    table.json('fbazxjugef');
    table.json('pwtbinhskq');
    table.text('nmwwnyxxtc');
    table.boolean('szlhfxpwix');
    table.float('wkukykxope');
    table.bigInteger('uiyuccngne');
    table.float('mwycnananb');
    table.boolean('weuzfedcmi');
    table.bigInteger('bttacfwzze');
  });
  await knex.schema.alterTable('ruyflmuhbw', function(table) {
    table.integer('eclhtxvvnd');
    table.text('mbguqweatu');
    table.bigInteger('euojxhpbbu');
    table.integer('wgpwyzlqjr');
    table.float('ipkjfzmdkf');
    table.bigInteger('lgbvcnacug');
    table.timestamp('irhyihbajr');
    table.string('fnevnqzuod');
  });
  await knex.schema.alterTable('epyfuhhtyk', function(table) {
    table.integer('ifcbhunoxl');
    table.integer('zyryzmmcgo');
    table.json('qlydpmmmdi');
    table.text('jvytcqkowv');
  });
  await knex.schema.alterTable('aognswmibt', function(table) {
    table.boolean('vqkrhhddow');
    table.integer('lymuccmyci');
    table.boolean('bnqyedkrgk');
    table.bigInteger('npmsdbphnu');
    table.timestamp('pajwpymryi');
    table.text('qyyddegjuy');
    table.timestamp('qasbmtiilf');
    table.bigInteger('urhoiqigop');
    table.string('khumalzecn');
    table.string('bnojfiojah');
  });
  await knex.schema.alterTable('wbbswdrsna', function(table) {
    table.string('rejmvefusm');
    table.float('pzwnvzixuf');
    table.boolean('flruapbzkl');
    table.string('laabsuharz');
    table.bigInteger('xozlxohxqu');
    table.float('xardwegehm');
    table.float('tlbbamyyzv');
    table.timestamp('prupeikpec');
    table.timestamp('rgoawjbdap');
    table.string('ucyarebbjh');
  });
  await knex.schema.alterTable('ozyzovkuin', function(table) {
    table.timestamp('vidwklqwwu');
    table.string('nmapuqrfdp');
    table.json('mdaebcegdr');
    table.text('gmmkrpfelh');
    table.float('gxxszgpixj');
  });
  await knex.schema.alterTable('xpoarfizem', function(table) {
    table.string('ebflstisvy');
    table.float('yodrdhunfm');
    table.string('ngszwgclcr');
    table.float('huqnxpfvxo');
    table.timestamp('kwnvyhpyww');
    table.integer('ulijcjkcsl');
    table.json('fgpniugyuj');
    table.bigInteger('ssogfqfjdh');
    table.text('bgjfqlcdtq');
    table.float('fyawfbmpdo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};